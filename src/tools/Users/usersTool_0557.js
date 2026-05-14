/**
 * Generated Tool: usersTool_0557
 * Domain: Users
 * ID: 0557
 */
exports.usersTool_0557 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0557:', error);
    throw error;
  }
};
