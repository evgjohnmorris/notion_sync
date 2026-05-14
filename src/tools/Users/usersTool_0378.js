/**
 * Generated Tool: usersTool_0378
 * Domain: Users
 * ID: 0378
 */
exports.usersTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0378:', error);
    throw error;
  }
};
