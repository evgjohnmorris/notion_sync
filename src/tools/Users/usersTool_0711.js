/**
 * Generated Tool: usersTool_0711
 * Domain: Users
 * ID: 0711
 */
exports.usersTool_0711 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0711:', error);
    throw error;
  }
};
