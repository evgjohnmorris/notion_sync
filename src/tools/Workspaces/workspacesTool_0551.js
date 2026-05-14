/**
 * Generated Tool: workspacesTool_0551
 * Domain: Workspaces
 * ID: 0551
 */
exports.workspacesTool_0551 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0551:', error);
    throw error;
  }
};
