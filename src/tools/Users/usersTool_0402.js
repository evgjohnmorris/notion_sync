/**
 * Generated Tool: usersTool_0402
 * Domain: Users
 * ID: 0402
 */
exports.usersTool_0402 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0402:', error);
    throw error;
  }
};
