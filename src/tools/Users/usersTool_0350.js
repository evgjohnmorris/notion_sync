/**
 * Generated Tool: usersTool_0350
 * Domain: Users
 * ID: 0350
 */
exports.usersTool_0350 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0350:', error);
    throw error;
  }
};
