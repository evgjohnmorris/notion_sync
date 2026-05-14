/**
 * Generated Tool: usersTool_0027
 * Domain: Users
 * ID: 0027
 */
exports.usersTool_0027 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0027:', error);
    throw error;
  }
};
