/**
 * Generated Tool: usersTool_0412
 * Domain: Users
 * ID: 0412
 */
exports.usersTool_0412 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0412:', error);
    throw error;
  }
};
