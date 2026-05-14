/**
 * Generated Tool: usersTool_0813
 * Domain: Users
 * ID: 0813
 */
exports.usersTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0813:', error);
    throw error;
  }
};
