/**
 * Generated Tool: usersTool_0986
 * Domain: Users
 * ID: 0986
 */
exports.usersTool_0986 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0986:', error);
    throw error;
  }
};
