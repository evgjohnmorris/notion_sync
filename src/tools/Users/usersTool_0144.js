/**
 * Generated Tool: usersTool_0144
 * Domain: Users
 * ID: 0144
 */
exports.usersTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0144:', error);
    throw error;
  }
};
