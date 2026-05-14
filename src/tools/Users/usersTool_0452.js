/**
 * Generated Tool: usersTool_0452
 * Domain: Users
 * ID: 0452
 */
exports.usersTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0452:', error);
    throw error;
  }
};
