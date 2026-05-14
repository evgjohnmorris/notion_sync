/**
 * Generated Tool: usersTool_0971
 * Domain: Users
 * ID: 0971
 */
exports.usersTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0971:', error);
    throw error;
  }
};
