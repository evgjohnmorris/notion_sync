/**
 * Generated Tool: usersTool_0587
 * Domain: Users
 * ID: 0587
 */
exports.usersTool_0587 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0587:', error);
    throw error;
  }
};
