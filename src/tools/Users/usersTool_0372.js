/**
 * Generated Tool: usersTool_0372
 * Domain: Users
 * ID: 0372
 */
exports.usersTool_0372 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0372:', error);
    throw error;
  }
};
