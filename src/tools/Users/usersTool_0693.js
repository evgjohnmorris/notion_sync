/**
 * Generated Tool: usersTool_0693
 * Domain: Users
 * ID: 0693
 */
exports.usersTool_0693 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0693:', error);
    throw error;
  }
};
