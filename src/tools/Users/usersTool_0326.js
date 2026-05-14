/**
 * Generated Tool: usersTool_0326
 * Domain: Users
 * ID: 0326
 */
exports.usersTool_0326 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0326:', error);
    throw error;
  }
};
