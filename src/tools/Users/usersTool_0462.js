/**
 * Generated Tool: usersTool_0462
 * Domain: Users
 * ID: 0462
 */
exports.usersTool_0462 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0462:', error);
    throw error;
  }
};
