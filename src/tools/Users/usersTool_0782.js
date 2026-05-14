/**
 * Generated Tool: usersTool_0782
 * Domain: Users
 * ID: 0782
 */
exports.usersTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0782:', error);
    throw error;
  }
};
