/**
 * Generated Tool: usersTool_0181
 * Domain: Users
 * ID: 0181
 */
exports.usersTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0181:', error);
    throw error;
  }
};
