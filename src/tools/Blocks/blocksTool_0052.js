/**
 * Generated Tool: blocksTool_0052
 * Domain: Blocks
 * ID: 0052
 */
exports.blocksTool_0052 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0052:', error);
    throw error;
  }
};
