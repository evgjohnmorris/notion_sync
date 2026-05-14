/**
 * Generated Tool: blocksTool_0940
 * Domain: Blocks
 * ID: 0940
 */
exports.blocksTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0940:', error);
    throw error;
  }
};
