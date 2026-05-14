/**
 * Generated Tool: usersTool_0901
 * Domain: Users
 * ID: 0901
 */
exports.usersTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0901:', error);
    throw error;
  }
};
