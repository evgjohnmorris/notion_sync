/**
 * Generated Tool: usersTool_0082
 * Domain: Users
 * ID: 0082
 */
exports.usersTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0082:', error);
    throw error;
  }
};
