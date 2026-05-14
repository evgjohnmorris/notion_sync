/**
 * Generated Tool: workspacesTool_0549
 * Domain: Workspaces
 * ID: 0549
 */
exports.workspacesTool_0549 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0549:', error);
    throw error;
  }
};
