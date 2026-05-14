/**
 * Generated Tool: usersTool_0639
 * Domain: Users
 * ID: 0639
 */
exports.usersTool_0639 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0639:', error);
    throw error;
  }
};
