/**
 * Generated Tool: blocksTool_0621
 * Domain: Blocks
 * ID: 0621
 */
exports.blocksTool_0621 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0621:', error);
    throw error;
  }
};
