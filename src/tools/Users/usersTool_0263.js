/**
 * Generated Tool: usersTool_0263
 * Domain: Users
 * ID: 0263
 */
exports.usersTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0263:', error);
    throw error;
  }
};
