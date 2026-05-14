/**
 * Generated Tool: usersTool_0151
 * Domain: Users
 * ID: 0151
 */
exports.usersTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0151:', error);
    throw error;
  }
};
