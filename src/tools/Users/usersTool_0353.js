/**
 * Generated Tool: usersTool_0353
 * Domain: Users
 * ID: 0353
 */
exports.usersTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0353:', error);
    throw error;
  }
};
