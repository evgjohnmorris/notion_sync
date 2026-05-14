/**
 * Generated Tool: usersTool_0060
 * Domain: Users
 * ID: 0060
 */
exports.usersTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0060:', error);
    throw error;
  }
};
