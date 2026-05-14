/**
 * Generated Tool: usersTool_0053
 * Domain: Users
 * ID: 0053
 */
exports.usersTool_0053 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0053:', error);
    throw error;
  }
};
