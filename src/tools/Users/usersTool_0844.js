/**
 * Generated Tool: usersTool_0844
 * Domain: Users
 * ID: 0844
 */
exports.usersTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0844:', error);
    throw error;
  }
};
