/**
 * Generated Tool: usersTool_0285
 * Domain: Users
 * ID: 0285
 */
exports.usersTool_0285 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0285:', error);
    throw error;
  }
};
