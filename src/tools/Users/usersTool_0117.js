/**
 * Generated Tool: usersTool_0117
 * Domain: Users
 * ID: 0117
 */
exports.usersTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0117:', error);
    throw error;
  }
};
