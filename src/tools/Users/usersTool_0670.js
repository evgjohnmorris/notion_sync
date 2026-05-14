/**
 * Generated Tool: usersTool_0670
 * Domain: Users
 * ID: 0670
 */
exports.usersTool_0670 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0670:', error);
    throw error;
  }
};
