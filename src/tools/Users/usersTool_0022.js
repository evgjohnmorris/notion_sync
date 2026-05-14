/**
 * Generated Tool: usersTool_0022
 * Domain: Users
 * ID: 0022
 */
exports.usersTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0022:', error);
    throw error;
  }
};
