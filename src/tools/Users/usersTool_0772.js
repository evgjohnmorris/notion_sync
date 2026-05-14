/**
 * Generated Tool: usersTool_0772
 * Domain: Users
 * ID: 0772
 */
exports.usersTool_0772 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0772:', error);
    throw error;
  }
};
