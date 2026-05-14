/**
 * Generated Tool: usersTool_0346
 * Domain: Users
 * ID: 0346
 */
exports.usersTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0346:', error);
    throw error;
  }
};
