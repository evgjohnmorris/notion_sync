/**
 * Generated Tool: usersTool_0480
 * Domain: Users
 * ID: 0480
 */
exports.usersTool_0480 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0480:', error);
    throw error;
  }
};
