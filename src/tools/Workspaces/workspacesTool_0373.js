/**
 * Generated Tool: workspacesTool_0373
 * Domain: Workspaces
 * ID: 0373
 */
exports.workspacesTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0373:', error);
    throw error;
  }
};
