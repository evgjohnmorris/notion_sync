/**
 * Generated Tool: usersTool_0408
 * Domain: Users
 * ID: 0408
 */
exports.usersTool_0408 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0408:', error);
    throw error;
  }
};
