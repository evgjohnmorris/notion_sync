/**
 * Generated Tool: workspacesTool_0285
 * Domain: Workspaces
 * ID: 0285
 */
exports.workspacesTool_0285 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0285:', error);
    throw error;
  }
};
