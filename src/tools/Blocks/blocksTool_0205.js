/**
 * Generated Tool: blocksTool_0205
 * Domain: Blocks
 * ID: 0205
 */
exports.blocksTool_0205 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0205:', error);
    throw error;
  }
};
