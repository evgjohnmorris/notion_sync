/**
 * Generated Tool: workspacesTool_0884
 * Domain: Workspaces
 * ID: 0884
 */
exports.workspacesTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0884:', error);
    throw error;
  }
};
