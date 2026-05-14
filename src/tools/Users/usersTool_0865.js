/**
 * Generated Tool: usersTool_0865
 * Domain: Users
 * ID: 0865
 */
exports.usersTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0865:', error);
    throw error;
  }
};
