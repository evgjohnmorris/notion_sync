/**
 * Generated Tool: workspacesTool_0940
 * Domain: Workspaces
 * ID: 0940
 */
exports.workspacesTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0940:', error);
    throw error;
  }
};
