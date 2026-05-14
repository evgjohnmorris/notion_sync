/**
 * Generated Tool: usersTool_0776
 * Domain: Users
 * ID: 0776
 */
exports.usersTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0776:', error);
    throw error;
  }
};
