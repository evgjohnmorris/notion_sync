/**
 * Generated Tool: usersTool_0097
 * Domain: Users
 * ID: 0097
 */
exports.usersTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0097:', error);
    throw error;
  }
};
