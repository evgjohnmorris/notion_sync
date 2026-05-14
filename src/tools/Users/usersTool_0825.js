/**
 * Generated Tool: usersTool_0825
 * Domain: Users
 * ID: 0825
 */
exports.usersTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0825:', error);
    throw error;
  }
};
