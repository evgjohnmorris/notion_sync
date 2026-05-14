/**
 * Generated Tool: usersTool_0310
 * Domain: Users
 * ID: 0310
 */
exports.usersTool_0310 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0310:', error);
    throw error;
  }
};
