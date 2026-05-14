/**
 * Generated Tool: usersTool_0495
 * Domain: Users
 * ID: 0495
 */
exports.usersTool_0495 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0495:', error);
    throw error;
  }
};
