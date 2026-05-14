/**
 * Generated Tool: blocksTool_0250
 * Domain: Blocks
 * ID: 0250
 */
exports.blocksTool_0250 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0250:', error);
    throw error;
  }
};
